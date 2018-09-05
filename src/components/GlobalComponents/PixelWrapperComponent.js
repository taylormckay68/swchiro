import React, { Component } from 'react';
import InViewMonitor from 'react-inview-monitor';
import { connect } from 'react-redux';
import { addToClicked, addToSeen } from '../redux/actions';

class PixelWrapperComponent extends Component {

    sendTrackingEvent(eventType) {
        var ostk = window.ostk || {};
          var ostkdata = ostk.data || {};
            var ostktrack = ostkdata.track || {};
              var pageViewData = ostktrack.pageViewData || {};
                var ostkcustomer = pageViewData.customer || {};
                  var userseed = ostkcustomer.userSeed || "";
                  var cust_id = ostkcustomer.id || "";
                  var ehid = ostkcustomer.internalEmailHash || "";
        const url = "https://nkkmfsfq10.execute-api.us-west-1.amazonaws.com/adpevents";
        const channel = "email";
        const channelType = "abi";
        const sessionId = "sessionId";
        const elementId = this.props.prod_id;
        const tid = "12345678";
        const eid = Math.round( ((new Date()).getTime() / 1000).toString(10));
        const uri = `${url}?eid=${eid}&chnl=${channel}&chnltype=${channelType}&etype=${eventType}
                     &aid=${this.props.assetId}&uid=${userseed}&ehid=${ehid}&sid=${sessionId}&pos=${0}&viewable=${true}&elmid=${elementId}
                     &tid=${tid}&rid=${this.props.rId}`;
        new Image().src = encodeURI(uri);
    }

    onAssetView() {
        if(!this.props.seen.has(this.props.assetId)) {
            this.props.addToSeen(this.props.assetId)
            this.sendTrackingEvent('view');
        }
    }

    onAssetClick() {
        if(!this.props.clicked.has(this.props.assetId)) {
            this.sendTrackingEvent('click');
            this.props.addToClicked(this.props.assetId)
        }
    }

    render() {
        return (
            <InViewMonitor onInView={() => this.onAssetView()}>
                <div onClick={() => this.onAssetClick()}>
                    { this.props.children }
                </div>
            </InViewMonitor>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        seen: state.seen,
        clicked: state.clicked,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToSeen: (item) => dispatch(addToSeen(item)),
        addToClicked: (item) => dispatch(addToClicked(item))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PixelWrapperComponent);
