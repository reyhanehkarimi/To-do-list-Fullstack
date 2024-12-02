import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/form-modal.css";
import { useSelector, useDispatch } from "react-redux";
import { addTask, updateTask } from "../redux/tasksSlice";
import { useForm, Controller } from "react-hook-form";
import { addDirectory } from "../redux/directorySlice";
import '../styles/responsive-page.css';
import EditModalNewDirectory from './ModalAddNewDirectory';

function FormModal({ show, handleClose, task, setShowModal, directories = [] }) {
  const { register, handleSubmit, reset, control, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNewDirectoryModal, setShowNewDirectoryModal] = useState(false); 

  const handleNewDirectoryClick = () => {
    setShowModal(false);
    setShowNewDirectoryModal(true);
  };

  useEffect(() => {
    if (task) {
      reset(task);
    }
  }, [task, reset]);

  const submitHandler = async (data) => {
    try {
      setIsSubmitting(true);

      if (!data.directory) {
        alert("Please select a directory.");
        return;
      }

      if (task) {
        dispatch(updateTask({ _id: task._id, ...data, directory: data.directory }));
      } else {
        dispatch(addTask({ ...data, directory: data.directory }));
      }
      handleClose();
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const modalStyle = isDarkMode
    ? { backgroundColor: "rgb(17, 1, 47)", color: "white" }
    : { backgroundColor: "rgba(201, 206, 250, 0.7)", color: "black" };

  const handleCloseNewDirectory = () => {
    setShowNewDirectoryModal(false); 
  };

  const handleCreateDirectory = (directoryName) => {
    dispatch(addDirectory(directoryName));
    setShowNewDirectoryModal(false);

    directories.push(directoryName);
  };

  useEffect(() => {
    if (directories && directories.length > 0) {
      reset({ directory: directories[0] }); 
    }
  }, [directories, reset]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={modalStyle} closeButton>
          <Modal.Title>{task ? "Edit Task" : "Add a Task"}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={modalStyle}>
          <Form onSubmit={handleSubmit(submitHandler)}>
            <Form.Label>Title</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              placeholder="Enter task title"
              {...register("title", { required: "Title is required" })}
              autoFocus
              style={{
                backgroundColor: isDarkMode ? "rgba(32, 23, 77, 0.675)" : "white",
                color: isDarkMode ? "white" : "black",
                border: isDarkMode
                  ? "2px solid rgba(120, 53, 153, 0.486)"
                  : "2px solid white",
              }}
              isInvalid={!!errors.title}
            />
            {errors.title && <div className="text-danger">{errors.title.message}</div>}

            <Form.Group style={{ width: "100%" }} className="mb-3" controlId="taskDate">
              <Form.Label>Date</Form.Label>
              <div className="date-picker-wrapper" style={{ position: "relative" }}>
                <Controller
                  name="deadline"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      selected={field.value}
                      onChange={(date) => field.onChange(date)}
                      placeholderText="Select a date"
                      dateFormat="dd/MM/yyyy"
                      className="form-control-date"
                    />
                  )}
                />
              </div>
            </Form.Group>

            <Form.Label>Description (Optional)</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter task description"
              rows={3}
              {...register("description")}
              style={{
                backgroundColor: isDarkMode ? "rgba(32, 23, 77, 0.675)" : "white",
                color: isDarkMode ? "white" : "black",
                border: isDarkMode
                  ? "2px solid rgba(120, 53, 153, 0.486)"
                  : "2px solid white",
              }}
            />

            <Form.Group>
              <Form.Label>Select a Directory</Form.Label>
              <Form.Select
                {...register("directory")}
                className="form-select"
                style={{
                  backgroundColor: isDarkMode ? "rgba(32, 23, 77, 0.675)" : "white",
                  color: isDarkMode ? "white" : "black",
                  border: isDarkMode
                    ? "2px solid rgba(120, 53, 153, 0.486)"
                    : "2px solid white",
                    marginBottom:"1rem"
                }}
              >
                <option value="">Select a directory</option>
                {directories && directories.length > 0 ? (
                  directories.map((directory, index) => (
                    <option key={index} value={directory}>
                      {directory}
                    </option>
                  ))
                ) : (
                  <option disabled>No directories available</option>
                )}
              </Form.Select>
              <Button
                onClick={handleNewDirectoryClick}
                className="new-btn-dropdown"
                type="button"
                style={{
                  fontSize: "13px",
                  border: "dashed 2px rgba(0, 0, 0, 0.429)",
                  backgroundColor: "transparent",
                  color: "black",
                  textAlign: "left",
                  opacity: "0.8",
                  marginTop:"1.rem",
                  color:isDarkMode ? "white" : "black",
                  border:isDarkMode ? "2px dashed rgba(120,53,153,0.486)" : "2px dashed rgba(33, 37, 41, 0.7)"
                }}
              >
                + New
              </Button>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Mark as important"
                {...register("important")}
                style={{
                  marginTop: "1rem",
                  cursor: "pointer",
                  color: isDarkMode ? "white" : "black",
                }}
              />
              <Form.Check
                type="checkbox"
                label="Mark as completed"
                {...register("completed")}
                style={{
                  marginTop: "1rem",
                  cursor: "pointer",
                  color: isDarkMode ? "white" : "black",
                }}
              />
            </Form.Group>

            <Button
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "rgb(114, 69, 187)",
                border: "none",
                marginTop: "-0.4rem",
              }}
              variant="primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : task ? "Update Task" : "Add a Task"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <EditModalNewDirectory
        show={showNewDirectoryModal}
        handleClose={handleCloseNewDirectory}
        onCreateDirectory={handleCreateDirectory}
      />
    </>
  );
}

export default FormModal;
