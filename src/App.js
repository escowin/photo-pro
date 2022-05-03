import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    { name: "commercial", description: "photos of grocery stores, food trucks, and other commercial projects",},
    { name: "portraits", description: "portraits of people in my life" },
    { name: "food", description: "delicious delicacies" },
    { name: "landscape", description: "fields, farmhouses, waterfalls, and the beauty of nature" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}/>
      <main>
        <div>
          <Gallery currentCategory={currentCategory} />
          <About /> 
        </div>
      </main>
    </div>
  );
}

export default App;
