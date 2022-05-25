import './herbs-and-tea.styles.scss';
const HerbsAndTeaComponent = () => {
  return (
    <div className="herbs-and-tea-container">
      <div className="steam" id="steam1"></div>
      <div className="steam" id="steam2"></div>
      <div className="steam" id="steam3"></div>
      <div className="steam" id="steam4"></div>

      <div id="cup">
        <div id="cup-body">
          <div className="herbs-and-tea-title">
            <h2>HERBS AND TEA</h2>
            <p>Shop Now</p>
          </div>

          <div id="cup-shade"></div>
        </div>
        <div id="cup-handle"></div>
      </div>

      <div id="saucer"></div>

      <div id="shadow"></div>
    </div>
  );
};

export default HerbsAndTeaComponent;
