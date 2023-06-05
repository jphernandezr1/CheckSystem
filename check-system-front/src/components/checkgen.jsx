import "../index.css";

function Checkgen(props) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
    <h2 className="text-lg font-semibold mb-2">Check for table {props.num_mesa}</h2>
    <p className="text-gray-600 mb-4">Sub-total : {props.Total_cuenta}</p>
    <p className="text-gray-600 mb-4">Tip : {props.Total_tip}</p>
    <p className="text-gray-600 mb-4">Total : {props.Total_paid}</p>
  </div>
  );
}

export default Checkgen;
