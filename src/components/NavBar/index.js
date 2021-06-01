import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const NavBar = () => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Home" />
        <Tab label="Politics" />
        <Tab label="International" />
        <Tab label="Sports" />
        <Tab label="Shows" />
        <Tab label="Tech" />
      </Tabs>
    </Paper>
  );
};

export default NavBar;
