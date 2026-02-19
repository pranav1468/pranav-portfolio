export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  techStack: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  hasPipelineOverview: boolean;
  problem: string;
  approach: string;
  pipeline?: string[];
  challenges: {
    challenge: string;
    decision: string;
  }[];
  limitations: string;
  results: {
    datasetSize: string;
    metrics: string;
    outcome: string;
  };
  resultImages?: {
    src: string;
    caption: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "face-mask-detection",
    title: "Face Mask Detection",
    shortDescription: "Real-time mask detection using YOLOv8 for public safety monitoring",
    techStack: ["YOLOv8", "Python", "OpenCV", "PyTorch"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/pranavbaghare",
    liveUrl: "https://github.com/pranavbaghare",
    hasPipelineOverview: true,
    problem: "During health emergencies, manual monitoring of mask compliance in public spaces is impractical. Automated detection enables scalable, real-time monitoring.",
    approach: "Fine-tuned YOLOv8 on a custom dataset with augmentation techniques. Optimized for real-time inference on standard hardware.",
    pipeline: [
      "Video/Image Input",
      "Frame Preprocessing",
      "YOLOv8 Detection",
      "NMS Filtering",
      "Bounding Box Output",
      "Real-time Display",
    ],
    challenges: [
      {
        challenge: "Chose YOLOv8 over Faster R-CNN",
        decision: "Real-time constraints required faster inference; YOLOv8 offered better speed-accuracy tradeoff",
      },
      {
        challenge: "Class imbalance in dataset",
        decision: "Applied weighted loss and augmentation to handle fewer no-mask samples",
      },
    ],
    limitations: "Performance drops on low-light or heavily occluded faces; next step would be domain-specific augmentation and lighting normalization.",
    results: {
      datasetSize: "8,000+ images (3 classes)",
      metrics: "mAP@0.5: 92.3%",
      outcome: "Achieved real-time detection at 30+ FPS on consumer GPU",
    },
    resultImages: [
      { src: "/placeholder.svg", caption: "Detection output with bounding boxes" },
      { src: "/placeholder.svg", caption: "Confusion matrix showing class performance" },
      { src: "/placeholder.svg", caption: "mAP curve across training epochs" },
    ],
  },
  {
    id: "forest-segmentation",
    title: "Forest Segmentation",
    shortDescription: "Satellite image segmentation for deforestation monitoring",
    techStack: ["U-Net", "TensorFlow", "Rasterio", "GDAL"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/pranavbaghare",
    liveUrl: "https://github.com/pranavbaghare",
    hasPipelineOverview: false,
    problem: "Manual analysis of satellite imagery for forest coverage is time-consuming. Automated segmentation enables large-scale environmental monitoring.",
    approach: "Implemented U-Net architecture with ResNet encoder. Used multi-spectral bands for improved vegetation detection.",
    challenges: [
      {
        challenge: "Large image sizes (10000x10000 px)",
        decision: "Used sliding window approach with overlap for seamless predictions",
      },
      {
        challenge: "Cloud cover in images",
        decision: "Implemented cloud masking preprocessing step before segmentation",
      },
    ],
    limitations: "Struggles with seasonal variations; future work includes temporal modeling for multi-date analysis.",
    results: {
      datasetSize: "500 satellite tiles (Sentinel-2)",
      metrics: "IoU: 0.847, Dice: 0.912",
      outcome: "Successfully mapped forest coverage across 50,000 hectares",
    },
  },
  {
    id: "medical-xray",
    title: "Medical X-ray Classification",
    shortDescription: "Chest X-ray classification for pneumonia detection",
    techStack: ["CNN", "TensorFlow", "Keras", "OpenCV"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/pranavbaghare",
    liveUrl: "https://github.com/pranavbaghare",
    hasPipelineOverview: false,
    problem: "Radiologist workload is high; automated screening can prioritize urgent cases and assist in preliminary diagnosis.",
    approach: "Built custom CNN architecture with attention mechanisms. Applied extensive augmentation for medical imaging.",
    challenges: [
      {
        challenge: "Limited labeled medical data",
        decision: "Used transfer learning from ImageNet and aggressive augmentation",
      },
      {
        challenge: "High stakes require interpretability",
        decision: "Added Grad-CAM visualizations to highlight decision regions",
      },
    ],
    limitations: "Trained on single hospital dataset; would need multi-site validation before clinical use.",
    results: {
      datasetSize: "5,856 X-ray images",
      metrics: "Accuracy: 94.2%, F1: 0.93",
      outcome: "Correctly identified 96% of pneumonia cases in test set",
    },
  },
  {
    id: "movie-rating",
    title: "Movie Rating Prediction",
    shortDescription: "ML pipeline for predicting movie ratings from metadata",
    techStack: ["Scikit-Learn", "XGBoost", "Pandas", "Feature Engineering"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/pranavbaghare",
    liveUrl: "https://github.com/pranavbaghare",
    hasPipelineOverview: false,
    problem: "Content platforms need to predict movie reception for recommendation and acquisition decisions.",
    approach: "Built end-to-end ML pipeline with feature engineering, model selection, and hyperparameter tuning.",
    challenges: [
      {
        challenge: "Many categorical features with high cardinality",
        decision: "Used target encoding with cross-validation to prevent leakage",
      },
      {
        challenge: "Choosing between models",
        decision: "Compared Random Forest, XGBoost, and LightGBM; XGBoost won on validation set",
      },
    ],
    limitations: "Predictions less accurate for niche genres with limited training data.",
    results: {
      datasetSize: "45,000 movies",
      metrics: "RMSE: 0.82, R²: 0.71",
      outcome: "Model predictions within 0.8 stars of actual rating on average",
    },
  },
];
