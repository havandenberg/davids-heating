import * as React from 'react';
import GridGallery from 'react-grid-gallery';
import { projects } from '../content';
import l from '../styles/layout';
import th from '../styles/theme';
import ty from '../styles/typography';

const Projects = () => (
  <div id="projects">
    <ty.H1 mb={th.spacing.l} mt={th.spacing.xl}>
      Featured Projects
    </ty.H1>
    <l.GalleryWrapper>
      <GridGallery
        enableImageSelection={false}
        images={projects}
        rowHeight={300}
        showImageCount={false}
      />
    </l.GalleryWrapper>
  </div>
);

export default Projects;
