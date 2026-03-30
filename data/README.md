# Data Directory

This public repository does not distribute the processed patient-level clinical
trial dataset used in the AccelP3 analyses.

The original source materials were derived from publicly available published
study documents and associated public dataset records.

If you want to reproduce the modelling workflow, prepare the following inputs
locally under `data/`:

- `master_dataset.csv`
- `timeseries/<trial>_symptom_timeseries.csv`
- `tta_labels/<trial>_tta.csv`

This repository intentionally excludes those derived data files from version
control in the public release.
