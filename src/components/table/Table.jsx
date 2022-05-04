import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function List() {
  const rows = [
    {
      id: 1,
      product: "Kiss Land",
      img: "https://indiehoy.com/wp-content/uploads/2013/08/the-weeknd-kiss-land-1200x1200.jpg",
      customer: "Daniel Amaya B.",
      date: "5 May",
      amount: 45,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 3,
      product: "Energy",
      img: "https://upload.wikimedia.org/wikipedia/en/2/2f/Disclosure_Energy_Cover.png",
      customer: "Santiago Marin",
      date: "5 May",
      amount: 38,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 4,
      product: "For Lack of a Better Name",
      img: "https://upload.wikimedia.org/wikipedia/en/e/e6/ForLackofaBetterNameAlbum.jpg",
      customer: "Julian Tibana",
      date: "5 May",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 5,
      product: "Dawn FM",
      img: "https://caracoltv.brightspotcdn.com/dims4/default/fc116b7/2147483647/strip/true/crop/1280x731+0+0/resize/1000x571!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2Ff2%2Fc4%2F5a59689844e6a30cbb872ea56ee2%2Fthe-weeknd-new-album-dawn-fm.jpg",
      customer: "Mauricio Sierra",
      date: "5 May",
      amount: 10,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2,
      product: "Beauty Behind the Madness",
      img: "https://m.media-amazon.com/images/I/5179IOtVhxL._SX466_.jpg",
      customer: "Pablo Morrone",
      date: "5 May",
      amount: 5,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;