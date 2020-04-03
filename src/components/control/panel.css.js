import styled from 'styled-components';

export const PanelRoot = styled.div`
    position: fixed;
    top: ${props => props.theme.gap.base};
    left: ${props => props.theme.gap.base};
    max-height: calc(100vh - ${props => props.theme.gap.scale(2)});
    border-radius: 4px;
    background: white;
    width: 300px;
    max-width: 50vw;
    box-shadow: ${props => props.theme.shadow.lg};
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

export const PanelHeader = styled.h2`
    font-size: 0.8rem;
    padding: ${props => props.theme.gap.scale(.5) + ' ' + props.theme.gap.base};
    text-transform: uppercase;
    background-color: ${props => props.theme.color.white.dark};
    color: ${props => props.theme.color.gray.dark};
    border-bottom: 1px solid ${props => props.theme.color.gray.main};
    margin: 0;
`;

export const PanelItem = styled.div`
    padding: ${props => props.theme.gap.base};
    margin: 0;
`;

export default {
    root: PanelRoot,
    header: PanelHeader,
    item: PanelItem,
}