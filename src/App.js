import FileUpload from './FileUpload';
import LeadList from './LeadList';
import Dashboard from './Dashboard';
import logo from './logo.svg';
import './App.css';

function App() {
  const handleUpload = (data) => {
    console.log('Uploaded Data:', data);
    // Here you can set the uploaded data to your state
  };

  return (
    <div className="App">
      <FileUpload onUpload={handleUpload} />
      <LeadList />
    </div>
  );
}

export default App;

