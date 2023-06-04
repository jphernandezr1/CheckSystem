function Table(props) {
  return (
    <a href={props.link}>
    <div
      className="h-fit bg-blue-50 bg-cover bg-center rounded-lg shadow-lg p-16"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/mesa.png)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: 'rem',
      height: 'em'
      
     }} 
    >
        
      <div className="flex items-center justify-center">
            <div className="row items-center">
                <div className="h-fit items-center justify-right">
                <h2 className="text-lg font-semibold text-center">{props.table_num}</h2>
                </div>
                <div className="h-fit items-center justify-left">
                <h3 className="text-lg text-center">{props.total_price}</h3>
                </div>
            </div>
        </div>
    </div>
    </a>
  );
}

export default Table;
