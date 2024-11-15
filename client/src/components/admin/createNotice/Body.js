import React, { useEffect, useState } from "react";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { useDispatch, useSelector } from "react-redux";
import { createNotice } from "../../../redux/actions/adminActions";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Spinner from "../../../utils/Spinner";
import * as classes from "../../../utils/styles";
import { CREATE_NOTICE, SET_ERRORS } from "../../../redux/actionTypes";

const Body = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const departments = useSelector((state) => state.admin.allDepartment);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [value, setValue] = useState({
    date: "",
    noticeFor: "",
    topic: "",
    content: "",
    from: "",
    checkboxValue: false, // Added checkbox value to state
  });

  useEffect(() => {
    if (Object.keys(store.errors).length !== 0) {
      setError(store.errors);
      setValue({
        date: "",
        noticeFor: "",
        topic: "",
        content: "",
        from: "",
        checkboxValue: false,
      });
    }
  }, [store.errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({});
    setLoading(true);
    dispatch(createNotice(value));
  };

  useEffect(() => {
    if (store.errors || store.admin.noticeCreated) {
      setLoading(false);
      if (store.admin.noticeCreated) {
        setValue({
          date: "",
          noticeFor: "",
          topic: "",
          content: "",
          from: "",
          checkboxValue: false,
        });
        dispatch({ type: CREATE_NOTICE, payload: false });
        dispatch({ type: SET_ERRORS, payload: {} });
      }
    } else {
      setLoading(true);
    }
  }, [store.errors, store.admin.noticeCreated]);

  useEffect(() => {
    dispatch({ type: SET_ERRORS, payload: {} });
  }, []);

  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5 space-x-5">
        <div className="flex text-white items-center space-x-2 pl-4">
          <EngineeringIcon />
          <h1>Create Notice</h1>
        </div>
        <div className=" mr-10 bg-gray-200 flex flex-col rounded-xl ">
          <form className={classes.adminForm0} onSubmit={handleSubmit}>
            <div className={classes.adminForm1}>
              <div className={classes.adminForm2l}>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Date :</h1>
                  <input
                    placeholder="Date"
                    required
                    className={classes.adminInput}
                    type="date"
                    value={value.date}
                    onChange={(e) =>
                      setValue((prevValue) => ({
                        ...prevValue,
                        date: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Topic :</h1>
                  <input
                    required
                    placeholder="Topic"
                    className={classes.adminInput}
                    type="text"
                    value={value.topic}
                    onChange={(e) =>
                      setValue((prevValue) => ({
                        ...prevValue,
                        topic: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>To :</h1>
                  <Select
                    required
                    displayEmpty
                    sx={{ height: 36 }}
                    inputProps={{ "aria-label": "Without label" }}
                    value={value.noticeFor}
                    onChange={(e) =>
                      setValue((prevValue) => ({
                        ...prevValue,
                        noticeFor: e.target.value,
                      }))
                    }>
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="faculty">Faculty</MenuItem>
                    <MenuItem value="student">Student</MenuItem>
                  </Select>
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>From :</h1>
                  <input
                    required
                    placeholder="From"
                    className={classes.adminInput}
                    type="text"
                    value={value.from}
                    onChange={(e) =>
                      setValue((prevValue) => ({
                        ...prevValue,
                        from: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <label className={`${classes.adminLabel} whitespace-nowrap`}>
                    Allow files:
                  </label>
                  <input
                    id="allowFilesCheckbox"
                    type="checkbox"
                    checked={value.checkboxValue}
                    onChange={(e) =>
                      setValue((prevValue) => ({
                        ...prevValue,
                        checkboxValue: e.target.checked,
                      }))
                    }
                    className="transform scale-85"
                  />
                </div>
              </div>
              <div className={classes.adminForm2r}>
                <div className={classes.adminForm3}>
                  <h1 className={`self-start  ${classes.adminLabel}`}>
                    Content :
                  </h1>
                  <textarea
                    rows={10}
                    cols={40}
                    required
                    placeholder="Content...."
                    className={classes.adminInput}
                    value={value.content}
                    onChange={(e) =>
                      setValue((prevValue) => ({
                        ...prevValue,
                        content: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className={classes.adminForm3}></div>
              </div>
            </div>
            <div className={classes.adminFormButton}>
              <button className={classes.adminFormSubmitButton} type="submit">
                Submit
              </button>
              <button
                onClick={() => {
                  setValue({
                    date: "",
                    noticeFor: "",
                    topic: "",
                    content: "",
                    from: "",
                    checkboxValue: false,
                  });
                  setError({});
                }}
                className={classes.adminFormClearButton}
                type="button">
                Clear
              </button>
            </div>
            <div className={classes.loadingAndError}>
              {loading && (
                <Spinner
                  message="Creating Notice"
                  height={30}
                  width={150}
                  color="#111111"
                  messageColor="blue"
                />
              )}
              {(error.noticeError || error.backendError) && (
                <p className="text-red-500">
                  {error.noticeError || error.backendError}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Body;
