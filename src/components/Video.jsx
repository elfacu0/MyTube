import React from 'react';
import styled from '@emotion/styled/macro';

const Icon = styled.img`
    filter: invert(1.1);
    width: 20px;
    height: 20px;
    padding: 12px;
    cursor: pointer;
    visibility: hidden;
    @media (max-width: 420px) {
        visibility: visible;
    }
`;

const IconsInImage = styled.div`
    display: none;
    flex-direction: column;
    position: absolute;
    top: 10px;
    right: 10px;
`;

const VideoWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    max-width: 320px;
    min-width: 255px;
    min-height: 150px;
    margin-right: 20px;
    margin-bottom: 40px;
    @media (max-width: 420px) {
        margin-right: 0px;
        max-width: 420px;
        padding-bottom: 0px;
        margin-bottom: 30px;
    }
    &:hover ${Icon} {
        visibility: visible;
    }
    &:hover ${IconsInImage} {
        display: flex;
    }
    cursor: pointer;
`;

const VideoImage = styled.img`
    width: 100%;
    max-height: 165px;
    object-fit: cover;
    object-position: 50% 50%;
`;

const DetailsContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    width: 100%;
    text-align: left;
    font-size: 16px;
    @media (max-width: 420px) {
        font-size: 16px;
    }
`;

const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
    max-height: 36px;
    max-width: 36px;
    width: 15%;
    border-radius: 50%;
    margin-right: 20px;
`;

const VideoDetails = styled.div`
    color: white;
    width: 85%;
`;

const TitleContainer = styled.div`
    display: flex;
`;

const VideoTitle = styled.div`
    font-weight: 500;
    width: 95%;
    font-size: 1em;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const ChannelName = styled.div`
    margin-top: 6px;
    filter: brightness(65%);
    &:hover {
        filter: brightness(120%);
    }
`;

const VideoInfo = styled.div`
    font-size: 0.9em;
    filter: brightness(70%);
`;

const VideoImageContianer = styled.div`
    position: relative;
`;

const VideoDurationWrapper = styled.div`
    position: absolute;
    bottom: 10px;
    right: 5px;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    padding: 1px 5px 1px 5px;
    border-radius: 5px;
`;

const VideoDurationText = styled.p`
    color: white;
    margin: 0px;
    font-weight: 600;
    font-size: 0.82em;
`;

const IconImageWrapper = styled.div`
    padding: 6px;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.8);
    margin-bottom: 5px;
`;

const IconImage = styled.img`
    width: 20px;
    height: 20px;
    filter: invert(0.9);
`;

const Video = (props) => {
    const {
        image_url,
        profile_url,
        title,
        channelName,
        videoViews,
        videoAge,
        videoDuration,
    } = props;
    return (
        <VideoWrapper>
            <VideoImageContianer>
                <IconsInImage>
                    <IconImageWrapper>
                        <IconImage
                            alt="clock-icon"
                            src="https://image.flaticon.com/icons/svg/1827/1827379.svg"
                        />
                    </IconImageWrapper>
                    <IconImageWrapper>
                        <IconImage
                            alt="queue-icon"
                            src="https://www.flaticon.com/premium-icon/icons/svg/2740/2740670.svg"
                        />
                    </IconImageWrapper>
                </IconsInImage>
                <VideoImage src={image_url} alt={image_url} />
                <VideoDurationWrapper>
                    <VideoDurationText>{videoDuration}</VideoDurationText>
                </VideoDurationWrapper>
            </VideoImageContianer>
            <DetailsContainer>
                <ProfileImage src={profile_url} alt={profile_url} />
                <VideoDetails>
                    <TitleContainer>
                        <VideoTitle>{title}</VideoTitle>
                        <Icon
                            alt="three-icon"
                            src="https://image.flaticon.com/icons/svg/483/483345.svg"
                        />
                    </TitleContainer>
                    <ChannelName>{channelName}</ChannelName>
                    <VideoInfo>
                        {videoViews} • {videoAge}
                    </VideoInfo>
                </VideoDetails>
            </DetailsContainer>
        </VideoWrapper>
    );
};

export default Video;
