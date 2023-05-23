import './Container.css'
const Container = (props) => {
    const containerClass = props.parent ? `${props.parent}__container container` : 'container';
  return (
      <div className={containerClass}>
          {props.children}
      </div>
  );
}
export default Container;