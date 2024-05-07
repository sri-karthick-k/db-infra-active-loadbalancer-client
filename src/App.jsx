import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import './App.css';
import config from './config';
import ips from './ip.json';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = [];
        for (let i = 0; i < ips.length; i++) {
          const ip = ips[i].ip;
          const response = await fetch(`${config.apiUrl}/api/isActive/${ip}`);
          const result = await response.json();
          const isActive = result.isActive === "true" ? "Active" : "Not Active";
          const hostname = result.hostname;

          newData.push({ id: i + 1, ip, isActive, hostname });
        }
        setData(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const intervalId = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    return () => {
      clearInterval(intervalId); // Clean up the interval on unmount
    };
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1>Load Balancer</h1>
      <DataGrid
        rows={data}
        columns={[
          { field: 'id', headerName: 'ID', width: 70 },
          { field: 'ip', headerName: 'IP Address', width: 130 },
          { field: 'hostname', headerName: 'Hostname', width: 130 },
          { field: 'isActive', headerName: 'Result', width: 130 },
        ]}
        pageSize={5}
        
      />
    </div>
  );
}

export default App;
