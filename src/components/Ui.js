import "./style.css";

const Ui = ({ data }) => {
  console.log(data);
  let show;
  if (data.stok === 0) {
    return (show = (
      <div class="col-sm-3 text-dark mb-3">
        <div class="card h-100">
          <img src={data.gambar} class="card-img-top sold-out" alt="..." />
          <div class="btn-light border border-3">SOLD OUT</div>
          <div class="card-body">
            <h5 class="card-title">{data.nama}</h5>
            <p class="card-text">{data.harga}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">telah terjual {data.terjual} kali</small>
          </div>
        </div>
      </div>
    ));
  } else if (data.terjual > 50) {
    return (show = (
      <div class="col-sm-3 text-dark mb-3">
        <div class="card h-100">
          <img src={data.gambar} class="card-img-top " alt="..." />
          <div class="btn-primary border border-3">Best Seller</div>
          <div class="card-body">
            <h5 class="card-title">{data.nama}</h5>
            <p class="card-text">{data.harga}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">telah terjual {data.terjual} kali</small>
          </div>
        </div>
      </div>
    ));
  } else {
    return (show = (
      <div class="col-sm-3 text-dark mb-3">
        <div class="card h-100">
          <img src={data.gambar} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{data.nama}</h5>
            <p class="card-text">{data.harga}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">telah terjual {data.terjual} kali</small>
          </div>
        </div>
      </div>
    ));
  }
  return { show };
};

export default Ui;
