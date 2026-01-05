export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "model-evaluation-approach",
    title: "How I Approach Model Evaluation",
    description: "Beyond accuracy — using confusion matrices, per-class metrics, and failure analysis to understand what models actually learn.",
    date: "Jan 2026",
    readTime: "6 min read",
    tags: ["ML Evaluation", "Best Practices"],
    content: `
# How I Approach Model Evaluation

Accuracy is often the first metric we reach for, but it rarely tells the full story. In this post, I'll walk through my evaluation workflow.

## Why Accuracy Isn't Enough

Consider a dataset with 95% negative samples. A model that always predicts "negative" achieves 95% accuracy while being completely useless.

## My Evaluation Checklist

1. **Confusion Matrix** — Understanding where the model fails
2. **Per-class Metrics** — Precision, recall, F1 for each class
3. **Failure Analysis** — Manually reviewing misclassified samples
4. **Error Categorization** — Grouping errors by type (data quality, edge cases, etc.)

## The Value of Looking at Failures

The most learning happens when examining what went wrong. I typically sample 50-100 misclassified examples and categorize them. This often reveals:
- Label noise in the dataset
- Edge cases not represented in training
- Systematic biases in the data

## Practical Tips

- Always stratify your train/test splits
- Report confidence intervals when possible
- Document your evaluation methodology for reproducibility

Understanding model behavior matters more than chasing metrics.
    `.trim(),
  },
  {
    slug: "error-analysis-ml",
    title: "Understanding Error Analysis in ML",
    description: "A systematic approach to debugging model predictions. Categorizing errors, identifying patterns, and prioritizing fixes.",
    date: "Dec 2025",
    readTime: "8 min read",
    tags: ["Error Analysis", "Debugging"],
    content: `
# Understanding Error Analysis in ML

When a model underperforms, the natural instinct is to try more data or bigger models. But systematic error analysis often reveals simpler solutions.

## The Error Analysis Process

### Step 1: Collect Errors
Gather all misclassified samples from your validation set. This is your working dataset for analysis.

### Step 2: Categorize
Create categories that make sense for your domain:
- **Data quality issues** — blurry images, mislabeled samples
- **Edge cases** — unusual but valid inputs
- **Ambiguous examples** — even humans would struggle
- **Model limitations** — systematic failures

### Step 3: Quantify
What percentage of errors fall into each category? This tells you where to focus.

### Step 4: Prioritize Fixes
Address the largest categories first. Sometimes fixing data quality issues has more impact than any modeling change.

## A Real Example

In my face mask detection project, error analysis revealed that 30% of false negatives occurred with side-profile faces. This led me to add more augmentation for rotated faces rather than increasing model capacity.

## Key Takeaway

Error analysis transforms debugging from guesswork into engineering. It's not glamorous, but it's often the difference between a demo and a deployable model.
    `.trim(),
  },
  {
    slug: "yolo-lessons-learned",
    title: "What I Learned Building a YOLO-Based System",
    description: "Practical lessons from training YOLOv8 for face mask detection — data prep, augmentation choices, and threshold tuning.",
    date: "Nov 2025",
    readTime: "10 min read",
    tags: ["Object Detection", "YOLO"],
    content: `
# What I Learned Building a YOLO-Based System

Object detection has a steeper learning curve than classification. Here's what I wish I knew before starting.

## Data Preparation Matters Most

YOLO expects annotations in a specific format. I spent significant time:
- Converting from various annotation formats to YOLO format
- Validating bounding boxes (some were outside image boundaries)
- Ensuring class balance across the dataset

## Augmentation Strategy

Not all augmentations are equal for detection:

**Helpful:**
- Horizontal flips
- Color jittering
- Mosaic augmentation (YOLO's specialty)

**Be careful with:**
- Heavy rotation (can distort bounding boxes)
- Extreme crops (might cut objects in half)

## Threshold Tuning

The confidence and IoU thresholds significantly impact performance:
- Lower confidence threshold → more detections, more false positives
- Higher IoU threshold → stricter matching, lower recall

I found that plotting precision-recall curves at different thresholds helped find the sweet spot for my use case.

## Inference Optimization

For real-time applications:
- Batch processing when possible
- Consider TensorRT for NVIDIA GPUs
- Profile your code — preprocessing is often the bottleneck

## Final Thoughts

Detection models require more careful data handling than classification. Invest time upfront in data quality and annotation consistency. The modeling part is often the easiest step.
    `.trim(),
  },
];
