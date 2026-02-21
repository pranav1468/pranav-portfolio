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
    id: "satellite-imagery-segmentation",
    title: "Satellite Imagery Segmentation & Deforestation Analysis",
    shortDescription: "Automated forest monitoring using multispectral satellite imagery and deep learning with Modified U-Net and Siamese U-Net",
    techStack: ["Python", "TensorFlow", "mU-Net", "Siamese U-Net"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/pranav1468",
    liveUrl: "https://github.com/pranav1468",
    hasPipelineOverview: true,
    problem: "Manual analysis of satellite imagery for forest coverage is time-consuming and error-prone. Automated segmentation and change detection enables large-scale environmental monitoring.",
    approach: "Developed an automated forest monitoring system using multispectral satellite imagery. Implemented a Modified U-Net for pixel-wise forest segmentation and a Siamese U-Net for temporal change detection. Leveraged weak supervision with vegetation indices to reduce manual labeling effort.",
    pipeline: [
      "Multispectral Satellite Input",
      "Vegetation Index Computation",
      "Weak Supervision Labeling",
      "mU-Net Segmentation",
      "Siamese U-Net Change Detection",
      "Forest Loss/Gain Output",
    ],
    challenges: [
      {
        challenge: "Reducing manual labeling effort",
        decision: "Leveraged weak supervision with vegetation indices to generate pseudo-labels automatically",
      },
      {
        challenge: "Temporal change detection across dates",
        decision: "Used Siamese U-Net architecture to compare satellite images from different time periods",
      },
    ],
    limitations: "Struggles with seasonal variations and cloud cover; future work includes multi-temporal fusion and cloud masking preprocessing.",
    results: {
      datasetSize: "Multispectral satellite tiles",
      metrics: "Reliable segmentation using standard metrics",
      outcome: "Achieved reliable forest loss and gain detection across monitored regions",
    },
  },
  {
    id: "pneumonia-diagnosis",
    title: "Automated Pneumonia Diagnosis System",
    shortDescription: "Deep learning pipeline for pneumonia detection from chest X-rays using DenseNet121 with 91% accuracy and 94% recall",
    techStack: ["Python", "TensorFlow", "DenseNet121"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/pranav1468",
    liveUrl: "https://github.com/pranav1468",
    hasPipelineOverview: false,
    problem: "Radiologist workload is high; automated screening can prioritize urgent cases and assist in preliminary diagnosis of pneumonia from chest X-rays.",
    approach: "Developed a deep learning pipeline using chest X-ray images. Implemented a custom CNN as a baseline and leveraged transfer learning with DenseNet121 to improve generalization. Examined the impact of deep feature reuse and dense connectivity on model performance.",
    challenges: [
      {
        challenge: "Limited labeled medical data",
        decision: "Used transfer learning with DenseNet121 pre-trained on ImageNet and fine-tuned on chest X-rays",
      },
      {
        challenge: "High stakes require high recall",
        decision: "Optimized for recall to minimize missed pneumonia cases, achieving 94% recall",
      },
    ],
    limitations: "Trained on single dataset; would need multi-site validation before clinical use.",
    results: {
      datasetSize: "Chest X-ray image dataset",
      metrics: "Accuracy: 91%, Recall: 94%",
      outcome: "Fine-tuned DenseNet121 achieving 91% accuracy and 94% recall on pneumonia cases",
    },
  },
  {
    id: "traffic-sign-recognition",
    title: "Autonomous Vehicle Traffic Sign Recognition",
    shortDescription: "Multi-class CNN for traffic sign recognition on GTSRB dataset achieving 99.7% validation accuracy with Streamlit deployment",
    techStack: ["Python", "Keras", "CNN", "Streamlit"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/pranav1468",
    liveUrl: "https://github.com/pranav1468",
    hasPipelineOverview: true,
    problem: "Autonomous vehicles need reliable, real-time traffic sign recognition across diverse conditions including varying illumination and viewpoint angles.",
    approach: "Designed and trained a multi-class CNN for traffic sign recognition on the GTSRB dataset (43 classes). Implemented image preprocessing and augmentation pipeline for robustness. Deployed as an interactive Streamlit web application.",
    pipeline: [
      "Image Input",
      "Preprocessing & Augmentation",
      "Multi-class CNN",
      "Classification (43 classes)",
      "Streamlit Web App",
      "Real-time Inference",
    ],
    challenges: [
      {
        challenge: "Robustness to illumination and viewpoint variations",
        decision: "Implemented comprehensive image preprocessing and augmentation pipeline",
      },
      {
        challenge: "Generalization across 43 classes",
        decision: "Applied controlled training and regularization techniques to prevent overfitting",
      },
    ],
    limitations: "Performance may degrade with heavily occluded or damaged signs not represented in training data.",
    results: {
      datasetSize: "GTSRB dataset (43 classes)",
      metrics: "Validation Accuracy: 99.7%",
      outcome: "Deployed as interactive Streamlit web app for real-time inference on uploaded images",
    },
  },
];
