import { ethers } from "ethers";
const Buy = ({ state }) => {
  const buy = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    const price=document.querySelector('#amount').value;
    console.log(name, message, contract);
    const amount = { value: ethers.utils.parseEther(price) };
    const transaction = await contract.buy(name, message, amount);
    alert("Takes around a minute as it is deployed in defi testnet you can use the mainnet or other network to increase the deployment speed ,THE SPEED ISSUE HAS NOTHING TO DO WITH THE APP");
    await transaction.wait();
    console.log("Transaction is done");
  };
  return (
    <>
      <div className="container-md" style={{ width: "50%", marginTop: "25px" , color:"white"}}>
        <form onSubmit={buy}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter Your Message"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Amount</label>
            <input
              type="number"
              className="form-control"
              id="amount"
              placeholder="Enter the amount "
            />
          </div>
          <button
            type="submit"
            className="btn btn-dark"
            style={{width:"100px"}}
            disabled={!state.contract}
          >
            Buy
          </button>
        </form>
      </div>
    </>
  );
};
export default Buy;
