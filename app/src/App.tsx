import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


	useEffect(() => {
	const peerConnection = new RTCPeerConnection();
		console.log(peerConnection);
	}, []);

  return (
	<div className="App">
		Test
	</div>
  );
}

export default App;
