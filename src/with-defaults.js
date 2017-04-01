import { createEagerElement } from './utils';

export const withDefaults = props => (component) => {
  const WithDefaults = ownerProps =>
    createEagerElement(component, ownerProps);
  WithDefaults.defaultProps = props;
  WithDefaults.propTypes = component.propTypes;

  return WithDefaults;
};
