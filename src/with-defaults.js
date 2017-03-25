import { createEagerElement } from './utils';

export const withDefaults = props => (component) => {
  const withDefaults = ownerProps =>
    createEagerElement(component, ownerProps);
  withDefaults.defaultProps = props;
  withDefaults.propTypes = component.propTypes;

  return withDefaults;
};
