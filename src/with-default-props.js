import { createEagerElement } from './utils';

export const withDefaultProps = props => (component) => {
  const WithDefaultProps = ownerProps =>
    createEagerElement(component, ownerProps);
  WithDefaultProps.defaultProps = props;
  WithDefaultProps.propTypes = component.propTypes;

  return WithDefaultProps;
};
