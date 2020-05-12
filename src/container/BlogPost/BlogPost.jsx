import React, { Component } from "react";
import "./BlogPost.css";
import Post from "../../component/BlogPost/Post";
import firebase from "firebase";
import firebaseConfig from "../../firebase/config";

class BlogPost extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(firebaseConfig);

    this.state = {
      listArtikel: [],
    };

    this.state = {
      abc: [],
    };
  }

  ambilDataDariServerAPI = () => {
    // fungsi untuk mengambil data dari API dengan penambahan sort dan order
    let ref = firebase.database().ref("/");
    ref.on("value", (snapshot) => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  simpanDataKeServerAPI = () => {
    firebase.database().ref("/").set(this.state);
  };

  componentDidMount() {
    // komponen untuk mengecek ketika compnent telah di-mount-ing, maka panggil API
    this.ambilDataDariServerAPI(); // ambil data dari server API lokal
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.simpanDataKeServerAPI();
    }
  }

  handleHapusArtikel = (idArtikel) => {
    // fungsi yang meng-handle button action hapus data
    const { abc } = this.state;
    const newState = abc.filter((data) => {
      return data.uid !== idArtikel;
    });
    this.setState({ abc: newState });
  };

  handleTambahArtikel = (event) => {
    // fungsi untuk meng-hadle form tambah data artikel
    let formInsertArtikel = { ...this.state.insertArtikel }; // clonning data state insertArtikel ke dalam variabel formInsertArtikel
    let timestamp = new Date().getTime(); // digunakan untuk menyimpan waktu (sebagai ID artikel)
    formInsertArtikel["id"] = timestamp;
    formInsertArtikel[event.target.name] = event.target.value; // menyimpan data onchange ke formInsertArtikel sesuai dengan target yg diisi
    this.setState({
      insertArtikel: formInsertArtikel,
    });
  };

  handleTombolSimpan = (event) => {
    let title = this.refs.judulArtikel.value;
    let body = this.refs.isiArtikel.value;
    let uid = this.refs.uid.value;

    if (uid && title && body) {
      const { abc } = this.state;
      const indeksArtikel = abc.findIndex((data) => {
        return data.uid === uid;
      });

      abc[indeksArtikel].title = title;
      abc[indeksArtikel].body = body;
      this.setState({ abc });
    } else if (title && body) {
      const uid = new Date().getTime().toString();
      const { abc } = this.state;
      abc.push({ uid, title, body });
      this.setState({ abc });
    }
    this.refs.judulArtikel.value = "";
    this.refs.isiArtikel.value = "";
    this.refs.uid.value = "";
  };

  render() {
    return (
      <div className="post-artikel">
        <div className="form pb-2 border-bottom">
          <div className="form-group row">
            <label htmlFor="title" className="col-sm-2 col-form-label">
              Judul
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                ref="judulArtikel"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="body" className="col-sm-2 col-form-label">
              Isi
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                id="body"
                name="body"
                rows="3"
                ref="isiArtikel"
              ></textarea>
            </div>
          </div>
          <input type="hidden" name="uid" ref="uid" />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleTombolSimpan}
          >
            Simpan
          </button>
        </div>
        <h2>Daftar Artikel</h2>
        {this.state.abc.map((artikel) => {
          return (
            <Post
              key={artikel.uid}
              judul={artikel.title}
              isi={artikel.body}
              idArtikel={artikel.uid}
              hapusArtikel={this.handleHapusArtikel}
            />
          );
        })}
      </div>
    );
  }
}

export default BlogPost;
