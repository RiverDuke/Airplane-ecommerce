import { useState } from "react";

export default function AddArticle() {
  const initialValue = {
    title: "",
    password: "",
    scource: "",
    header: "",
    mainImg: "",
    content1: "",
    image1: "",
    content2: "",
    image2: "",
    content3: "",
    image3: "",
    content4: "",
    image4: "",
    content5: "",
    image5: "",
  };
  const [data, setData] = useState(initialValue);

  function onChange({ target }) {
    setData({
      ...data,
      [target.name]: target.value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <h1>Add Article</h1>
      <form className="col-6 article-form" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title :
          </label>
          <input
            name="title"
            type="textarea"
            id="title"
            className="form-control"
            onChange={onChange}
            value={data.title}
            required
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="scource" className="form-label">
            Scource :
          </label>
          <input
            name="scource"
            type="text"
            id="scource"
            className="form-control"
            onChange={onChange}
            value={data.scource}
            required
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="Header" className="form-label">
            Header :
          </label>
          <textarea
            name="header"
            type="text"
            id="header"
            className="form-control"
            onChange={onChange}
            value={data.header}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="mainImg" className="form-label">
            Main Image / Thumbnail :
          </label>
          <input
            name="mainImg"
            type="text"
            id="mainImg"
            className="form-control"
            onChange={onChange}
            value={data.header}
            required
          ></input>
        </div>

        <div className="mb-3">
          <label htmlFor="content1" className="form-label">
            Content - 1 :
          </label>
          <textarea
            name="content1"
            type="text"
            id="content2"
            className="form-control"
            onChange={onChange}
            value={data.content1}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="image1" className="form-label">
            Image - 1 :
          </label>
          <input
            name="image1"
            type="text"
            id="image1"
            className="form-control"
            onChange={onChange}
            value={data.image1}
            required
          ></input>
        </div>

        {/* abc */}

        <div className="mb-3">
          <label htmlFor="content2" className="form-label">
            Content - 2 :
          </label>
          <textarea
            name="content2"
            type="text"
            id="content2"
            className="form-control"
            onChange={onChange}
            value={data.content2}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="image2" className="form-label">
            Image - 2 :
          </label>
          <input
            name="image2"
            type="text"
            id="image2"
            className="form-control"
            onChange={onChange}
            value={data.image2}
            required
          ></input>
        </div>

        {/* abc */}
        <div className="mb-3">
          <label htmlFor="content3" className="form-label">
            Content - 3 :
          </label>
          <textarea
            name="content3"
            type="text"
            id="content3"
            className="form-control"
            onChange={onChange}
            value={data.content3}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="image3" className="form-label">
            Image - 3 :
          </label>
          <input
            name="image3"
            type="text"
            id="image3"
            className="form-control"
            onChange={onChange}
            value={data.image3}
            required
          ></input>
        </div>

        {/* abc */}
        <div className="mb-3">
          <label htmlFor="content4" className="form-label">
            Content - 4 :
          </label>
          <textarea
            name="content4"
            type="text"
            id="content4"
            className="form-control"
            onChange={onChange}
            value={data.content4}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="image4" className="form-label">
            Image - 4 :
          </label>
          <input
            name="image4"
            type="text"
            id="image4"
            className="form-control"
            onChange={onChange}
            value={data.image4}
            required
          ></input>
        </div>

        {/* abc */}
        <div className="mb-3">
          <label htmlFor="content5" className="form-label">
            Content - 5 :
          </label>
          <textarea
            name="content5"
            type="text"
            id="content5"
            className="form-control"
            onChange={onChange}
            value={data.content5}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="image5" className="form-label">
            Image - 5 :
          </label>
          <input
            name="image5"
            type="text"
            id="image5"
            className="form-control"
            onChange={onChange}
            value={data.image5}
            required
          ></input>
        </div>

        {/* abc */}

        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
    </div>
  );
}
