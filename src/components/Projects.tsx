import * as React from 'react';
import GridGallery from 'react-grid-gallery';
import { projects } from '../content';
import l from '../styles/layout';
import { spacing } from '../styles/theme';
import ty from '../styles/typography';

const Projects = () => (
  <div id="services">
    <ty.H2 my={spacing.xl}>Featured Projects</ty.H2>
    <l.Flex isWrap>
      <GridGallery
        enableImageSelection={false}
        images={projects}
        rowHeight={300}
        showImageCount={false}
      />
    </l.Flex>
  </div>
);

export default Projects;
