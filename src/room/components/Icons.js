import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Email from 'overstock-component-library/lib/Icons/communication/Email_Fill'
import Facebook from 'overstock-component-library/lib/Icons/social/Facebook'
import Twitter from 'overstock-component-library/lib/Icons/social/Twitter'
import Pinterest from 'overstock-component-library/lib/Icons/social/Pinterest'
import Link from 'overstock-component-library/lib/Icons/navigation/Link'
import ArrowsSmallLeft from 'overstock-component-library/lib/Icons/arrows/Small_Left'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default class Icons extends Component {
    constructor(props) {
        super(props)

        this.state = {
            copied: false,
            currentUrl: typeof window !== 'undefined' ? window.location.href : '',
            value: ''
        }
    }

    onCopy = () => {
        this.setState({copied: true, value: window.location.href})
    }

    render() {
        const { state: { currentUrl, value }, onCopy } = this

        return (typeof window !== 'undefined') ?
            <div>
                <Wrapper>
                    <BackButton onClick={() => window.history.back()}><ArrowsSmallLeft color="#545658" />Back</BackButton>
                    <IconWrapper>
                        {/* <Bubble color="#444"><EmailIcon /></Bubble> */}
                        <Bubble target="_blank" href={"https://www.facebook.com/sharer/sharer.php?s=100&p[url]" + currentUrl} color="#35609f"><FacebookIcon /></Bubble>
                        <Bubble target="_blank" href={"https://twitter.com/intent/tweet?url=" + currentUrl} color="#2ca9e1"><TwitterIcon /></Bubble>
                        <Bubble target="_blank" href={"https://www.pinterest.com/pin/create/button/?url=" + currentUrl} color="#cb2025"><PinterestIcon /></Bubble>
                        <CopyToClipboard text={value} onCopy={onCopy}>
                            <Bubble color="#6a6a6a"><LinkIcon viewBox="-4 -4 32 32" /></Bubble>
                        </CopyToClipboard>
                    </IconWrapper>
                </Wrapper>
            </div>
        : <div></div>
    }
}


const Wrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    max-width: 1620px;
    margin: 24px;

    @media(min-width: 1128px) {
        margin: 24px 80px;
    }
    @media(min-width: 1780px) {
        margin: 24px auto;
    }
`

const BackButton = styled.div`
    align-items: center;
    background: #f5f6f7;
    border-radius: 20px;
    color: #545658;
    display: flex;
    flex-direction: row;
    padding: 10px 30px;
`

const IconWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Bubble = styled.a`
    align-items: center;
    background: ${props => props.color};
    border-radius: 100%;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-left: 8px;
    max-width: 20vw;
    max-height: 20vw;
    padding: 10px;
    width: 40px;
    height: 40px;

    svg {
        fill: #fff;
    }
`

const EmailIcon = styled(Email)`
    width: 100%;

`
const FacebookIcon = styled(Facebook)`
    width: 100%;

`
const TwitterIcon = styled(Twitter)`
    width: 100%;

`
const PinterestIcon = styled(Pinterest)`
    width: 100%;
    fill: red;
`
const LinkIcon = styled(Link)`
    width: 100%;
`

const HiddenInput = styled.textarea`
    height: 0;
    width: 0;
    font-size: 0;
    border: none;
`

