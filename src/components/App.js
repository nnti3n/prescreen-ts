import React from 'react';
import AutoComplete from './Autocomplete';

function App() {
  return <div>
    <div className="background">
      <div className="cover">
        <img
          className="img" aria-hidden="true" alt=""
          decoding="auto"
          sizes="100vw"
          src="https://a0.muscache.com/4ea/air/r:w3100-h2074-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg"
          srcSet="https://a0.muscache.com/4ea/air/r:w775-h518-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg 775w, https://a0.muscache.com/4ea/air/r:w1550-h1037-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg 1550w, https://a0.muscache.com/4ea/air/r:w3100-h2074-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg 3100w" />
      </div>
    </div>
    <AutoComplete />
  </div>
}

export default App;
