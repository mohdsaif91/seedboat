import React, { useState, useRef } from "react";

import { Input } from "../../../Components/FormElements/Input/Input";
import TextArea from "../../../Components/FormElements/TextArea/TextArea";
import attachment from "../../../Images/icon/attachment.png";
import removeIcon from "../../../Images/icon/removeIcon.png";

import style from "./addBlog.module.scss";
import globalStyle from "../../../global.module.scss";
import Button from "../../../Components/Button/Button";

const initialBlogData = {
  heading: "",
  headingArray: [
    {
      heading: "",
      subHeadingtext: "",
    },
    {
      heading: "",
      subHeadingtext: "",
    },
  ],
  blogMedia: [],
};

function AddBlog() {
  const [addBlogData, setAddBlogData] = useState({ ...initialBlogData });
  const inputFIleRef = useRef();
  return (
    <div className={style.addBlogContainer}>
      <div className={style.addBlogHeading}>Add blog</div>
      <div className={style.headingContainer}>
        <div className={style.inputContainer}>
          <Input
            placeHolder="Add Heading"
            className={style.inputItem}
            value={addBlogData.heading}
            onChange={(e) =>
              setAddBlogData({ ...addBlogData, heading: e.target.value })
            }
          />
        </div>
        {addBlogData.headingArray.map((m, i) => (
          <div className={style.inputContainer}>
            <Input
              className={style.inputItem}
              value={addBlogData.headingArray[i].heading}
              onChange={(e) => {
                addBlogData.headingArray[i].heading = e.target.value;
                setAddBlogData({
                  ...addBlogData,
                  headingArray: [...addBlogData.headingArray],
                });
              }}
              placeHolder={`Add Sub Heading ${i + 1}`}
            />
            <TextArea
              className={style.inputItem}
              value={addBlogData.headingArray[i].subHeadingtext}
              onChange={(e) => {
                addBlogData.headingArray[i].subHeadingtext = e.target.value;
                setAddBlogData({
                  ...addBlogData,
                  headingArray: [...addBlogData.headingArray],
                });
              }}
              placeHolder={`Sub Heading ${i + 1} Text`}
            />
          </div>
        ))}
        <button
          onClick={() =>
            setAddBlogData({
              ...addBlogData,
              headingArray: [
                ...addBlogData.headingArray,
                { heading: "", subHeadingtext: "" },
              ],
            })
          }
          className={style.addMoreBtn}
        >
          <div>+</div> <div>Add More Text</div>
        </button>
      </div>
      <div className={style.uploadImage}>
        <div className={style.selectedImageContainer}>
          {addBlogData.blogMedia.length > 0 &&
            addBlogData.blogMedia.map((m, i) => (
              <div className={style.selectedImageIcon}>
                <img
                  src={URL.createObjectURL(m)}
                  className={style.selectedImage}
                  alt=""
                />
                <span
                  className={style.removeIconContainer}
                  onClick={() => {
                    console.log(addBlogData.blogMedia.splice(i, 1));
                    setAddBlogData({
                      ...addBlogData,
                      blogMedia: [...addBlogData.blogMedia.splice(1, i)],
                    });
                  }}
                >
                  <img src={removeIcon} alt="" />
                </span>
              </div>
            ))}
        </div>
        <div
          onClick={() => inputFIleRef.current.click()}
          className={`${
            addBlogData.blogMedia.length > 0 && style.inputfileContainer
          }`}
        >
          <div className={globalStyle.headingPoppins}>Upload pictures</div>
          <img src={attachment} alt="" className={style.addImageIcon} />
        </div>
      </div>
      <input
        type="file"
        className={style.imageInput}
        ref={inputFIleRef}
        onChange={(e) => {
          setAddBlogData({
            ...addBlogData,
            blogMedia: [...addBlogData.blogMedia, e.target.files[0]],
          });
        }}
      />
      <Button
        text="Submit"
        className={style.submitBtn}
        onClick={() => console.log(addBlogData)}
      />
    </div>
  );
}

export default AddBlog;
