import Edge from "../models/edge.model.js";

export const createEdge = async (req, res) => {
  try {
    const { source, target } = req.body;
    const createdEdge = new Edge({ source, target });
    await createdEdge.save();
    res
      .status(200)
      .json({ message: "New edge created successfully", data: createdEdge });
  } catch (error) {
    res.status(500).json({ message: "Error in creating edges" });
  }
};

export const updateEdge = async (req, res) => {
  try {
    const { edgeId, source, target } = req.body;
    const updatedEdge = await Edge.findOneAndUpdate(
      { _id: edgeId },
      { source, target },
      { new: true }
    );
    res
      .status(201)
      .json({ message: "Edge updated successfully", data: updatedEdge });
  } catch (error) {
    res.status(500).json({ message: "Error in updating edge" });
  }
};

export const getEdge = async (req, res) => {
  try {
    const { edgeId } = req.body;
    const edges = await Edge.findOne({ _id: edgeId });
    res.status(200).json(edges);
  } catch (error) {
    res.status(500).json({ message: "Error in getting edges" });
  }
};

export const getAllEdges = async (req, res) => {
  try {
    const edges = await Edge.find();
    res.status(200).json(edges);
  } catch (error) {
    res.status(500).json({ message: "Error in getting edges" });
  }
};

export const deleteEdge = async (req, res) => {
  try {
    const { edgeId } = req.body;
    const deletedEdge = await Edge.deleteOne({ _id: edgeId });
    res
      .status(201)
      .json({
        message: "Edge deleted successfully",
        data: deletedEdge.deletedCount,
      });
  } catch (error) {
    res.status(500).json({ message: "Error in deleting edge" });
  }
};
