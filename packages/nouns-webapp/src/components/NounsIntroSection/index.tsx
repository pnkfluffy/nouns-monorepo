import classes from './NounsIntroSection.module.css';
import Section from '../../layout/Section';
import { Col, Nav } from 'react-bootstrap';
import { Trans } from '@lingui/macro';
import { Link } from 'react-router-dom';
import nounsIosGif from '../../assets/nouns-ios.gif';
import dlFromAppStoreImg from '../../assets/download-on-app-store.svg';

const NounsIntroSection = () => {
  const prophouseLink = (
    <a
      href="https://prop.house/"
      target="_blank"
      rel="noreferrer"
      className={classes.nounsIntroLinks}
    >
      <Trans>Prop House</Trans>
    </a>
  );

  return (
    <>
      <Section fullWidth={false} className={classes.videoSection}>
        <Col lg={6}>
          <div className={classes.textWrapper}>
            <h1>
              <Trans>Hi there.</Trans>
            </h1>
            <p>
              <Trans>
                Howdy ho.
              </Trans>
            </p>
          </div>
        </Col>
        <Col lg={6} className={classes.youtubeEmbedContainer}>
          {/* <iframe
            src="https://www.youtube.com/embed/lOzCA7bZG_k"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe> */}
        </Col>
      </Section>
      <Section fullWidth={false} className={classes.videoSection}>
        <Col lg={6} className={`${classes.youtubeEmbedContainer} order-lg-1 order-2`}>
        </Col>

        <Col lg={6} className={`order-lg-2 order-1`}>
          <div className={`${classes.textWrapper} ${classes.youtubeSectionText}`}>
            <h1>
              <Trans>This is. Section 2.</Trans>
            </h1>
            <p>
              <Trans>
                Hi again.
              </Trans>
            </p>
          </div>
        </Col>
      </Section>
    </>
  );
};

export default NounsIntroSection;
