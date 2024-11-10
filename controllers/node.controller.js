import Edge from "../models/edge.model.js";
import Node from "../models/node.model.js";

export const getAllNodes = async (req, res) => {
  try {
    const nodes = await Node.find();
    res.status(200).json(nodes);
  } catch (error) {
    res.status(500).json({ message: "Error in getting nodes" });
  }
};

export const getNode = async (req, res) => {
  try {
    const { nodeId } = req.body;
    const nodes = await Node.findOne({ _id: nodeId });
    res.status(200).json(nodes);
  } catch (error) {
    res.status(500).json({ message: "Error in getting nodes" });
  }
};

export const createNode = async (req, res) => {
  try {
    const node = new Node(req.body);
    await node.save();
    res
      .status(201)
      .json({ message: "New node created successfully", data: node });
  } catch (error) {
    res.status(500).json({ message: "Error in creating new node" });
  }
};

export const updateNode = async (req, res) => {
  try {
    const { nodeId, position, label } = req.body;
    const updatedNode = await Node.findOneAndUpdate(
      { _id: nodeId },
      {  label,position },
      { new: true }
    );
    res
      .status(201)
      .json({ message: "Node updated successfully", data: updatedNode });
  } catch (error) {
    res.status(500).json({ message: "Error in updating node" });
  }
};

export const deleteNode = async (req, res) => {
  try {
    const { nodeId } = req.body;
    console.log(nodeId)
    // const node = await Node.findOne({_id: nodeId})
    const deleteEdge =await Edge.deleteMany({$or: [{source: nodeId} , {target: nodeId}]})
    console.log(deleteEdge.deletedCount)
    const deletedNode = await Node.deleteOne({ _id: nodeId });
    res
      .status(201)
      .json({
        message: "Node deleted successfully",
        data: deletedNode.deletedCount,
      });
  } catch (error) {
    res.status(500).json({ message: "Error in deleting node" });
  }
};
