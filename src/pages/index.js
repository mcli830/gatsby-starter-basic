import React from 'react';
import Layout from 'components/layout/main';
import SEO from 'components/seo';
import Workspace from 'components/workspace/workspace';
import ControlPanel from 'components/control/panel';

const IndexPage = () => (
  <Layout>
    <SEO title="CSS Forge" />
    <Workspace />
    <ControlPanel />
  </Layout>
);

export default IndexPage;
