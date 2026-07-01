// import ScrollIndicator from "./Components/ScrollIndicator";
// import Loader from "./Components/Loader";
// import DraggableCard from "./Components/DraggableCard";

import Carousel from "./Components/Carousel";

const App = () => {
  return (
    <div>
      {/* <div className="flex h-screen justify-center items-center">
        <DraggableCard
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          }}
        >
          Card 1
        </DraggableCard>
        <DraggableCard
          style={{
            background: "linear-gradient(135deg, #5ee7df 0%, #b490ca  100%)",
          }}
        >
          Card 2
        </DraggableCard>
        <DraggableCard
          style={{
            background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
          }}
        >
          Card 3
        </DraggableCard>
      </div> */}

      {/* <ScrollIndicator /> */}
      {/* <Loader /> */}
      <Carousel />
    </div>
  );
};

export default App;
