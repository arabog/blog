import "./write.css"

export default function Write() {
          return (
                    <div className="write">
                              <form className="writeForm">
                                        <div className="writeFormGroup">
                                                  <label htmlFor="fileInput">
                                                            <span className="writeIcon">Add</span>
                                                  </label>

                                                  <input 
                                                            type="file" 
                                                            id="fileInput"
                                                            style={{display: "none"}}
                                                  />

                                                  <input type="text" 
                                                            placeholder="Tiltle"
                                                            className="writeInput"
                                                  />
                                        </div>

                                        <div className="writeFormGroup">
                                                  <textarea
                                                            placeholder="Tell your story...."
                                                            type="text"
                                                            className="writeInput writeText"
                                                  ></textarea>
                                        </div>

                                        <button type="submit" className="writeSubmit">
                                                  Publish
                                        </button>

                              </form>
                    </div>
          )
}
