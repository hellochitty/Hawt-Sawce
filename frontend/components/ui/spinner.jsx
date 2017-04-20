import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';



const Spinner = () => (
  <div>
    <RefreshIndicator
      size={100}
      left={700}
      top={200}
      loadingColor="#FF9800"
      status="loading"
      />
  </div>
);

export default Spinner;
