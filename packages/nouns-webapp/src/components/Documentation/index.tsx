import Section from '../../layout/Section';
import { Col } from 'react-bootstrap';
import classes from './Documentation.module.css';
import Accordion from 'react-bootstrap/Accordion';
import Link from '../Link';
import { Trans } from '@lingui/macro';

interface DocumentationProps {
  backgroundColor?: string;
}

const Documentation = (props: DocumentationProps = { backgroundColor: '#FFF' }) => {
  const cryptopunksLink = (
    <Link text={<Trans>CryptoPunks</Trans>} url="https://cryptopunks.app/" leavesPage={true} />
  );
  const playgroundLink = (
    <Link text={<Trans>Playground</Trans>} url="/playground" leavesPage={false} />
  );
  const publicDomainLink = (
    <Link
      text={<Trans>public domain</Trans>}
      url="https://creativecommons.org/publicdomain/zero/1.0/"
      leavesPage={true}
    />
  );
  const compoundGovLink = (
    <Link
      text={<Trans>Compound Governance</Trans>}
      url="https://compound.finance/governance"
      leavesPage={true}
    />
  );
  return (
    <Section
      fullWidth={false}
      className={classes.documentationSection}
      style={{ background: props.backgroundColor }}
    >
      <Col lg={{ span: 10, offset: 1 }}>
        <div className={classes.headerWrapper}>
          <h1>
            <Trans>WTF?</Trans>
          </h1>
          <p className={classes.aboutText}>
            <Trans>
              ________ is a Nouns dirivative project. Based off of the original Nouns project,
              ________ changes the formula by...
            </Trans>
          </p>
          <p className={classes.aboutText} style={{ paddingBottom: '4rem' }}>
            <Trans>
              Learn more below, or start creating ________ off-chain using the {playgroundLink}.
            </Trans>
          </p>
        </div>
        <Accordion flush>
          <Accordion.Item eventKey="0" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Example</Trans>
            </Accordion.Header>
            <Accordion.Body>
                <p>
                  <Trans>Example text.</Trans>
                </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Section>
  );
};
export default Documentation;
