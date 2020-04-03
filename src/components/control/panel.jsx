import React from 'react';
import PropTypes from 'prop-types';

import Styled from './panel.css';

const ControlPanel = (props) => {
    return (
        <Styled.root>
            <Styled.header>Control Panel</Styled.header>
            <Styled.item as="p">Panel Item</Styled.item>
        </Styled.root>
    );
}

export default ControlPanel;