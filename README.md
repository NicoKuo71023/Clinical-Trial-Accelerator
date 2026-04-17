

**Accelerating influenza Phase 3 trials using historical clinical study data.**

Research prototype for estimating individual Time to Alleviation
(TTA) and evaluating Phase 3 trial risk using symptom trajectories and baseline
clinical features.

This public repository contains the web prototype, modelling notebook, result
figures, and project documentation. It does **not** distribute the derived
patient-level dataset used for model fitting.

---

## Quick Start

To inspect the modelling workflow:

```text
notebooks/01_feature_engineering_and_modelling.ipynb
```

The notebook is included in this public repository, but the processed dataset is
not distributed here. To execute it, prepare the required CSV inputs locally
under `data/`.

This public repository does not include the private PDF extraction workflow or
the original source ZIP bundle.

---


---

## Data

The public repository does not include the derived patient-level CSV files used
for model fitting.

Expected local inputs:

- `data/master_dataset.csv`
- `data/timeseries/<trial>_symptom_timeseries.csv`
- `data/tta_labels/<trial>_tta.csv`

Important assumptions used by the modelling workflow:

- `subject_id` is not globally unique and should be used together with `trial_id`
- Symptom timeseries are organized at patient-by-timepoint granularity
- The WV15819 source material reflects a combined CSR covering WV15819, WV15876, and WV15978
- Some processed symptom scores may require clipping to the valid range `[0, 21]` after extraction

See `data/README.md` for the public data-directory note.

---

## Model

### Architecture

Cox Proportional Hazards using `lifelines.CoxPHFitter` with L2 penalization.

### Features

The main public notebook documents a leakage-aware setup using:

- Baseline symptom burden
- Individual enrolment symptom components
- Hours since symptom onset
- Fixed-window trajectory features such as `peak_score_fixed` and `last_score_fixed`

### Evaluation

The modelling workflow uses Leave-One-Trial-Out cross-validation to test
cross-trial generalization across six influenza studies.

---

## Results

Key figures included in this repository:

- `figures/loto_results.png`
- `figures/leakage_audit.png`
- `figures/km_all_trials.png`
- `figures/dataset_characterization.png`
- `figures/feature_selection.png`

Reported modelling result from the current workflow:

- Baseline only: mean LOTO C-index `0.562`
- 48h clean model: mean LOTO C-index `0.708`
- 72h clean model: mean LOTO C-index `0.740`

---

## Known Limitations

1. Treatment effects and patient-level prognostic effects may still be partially confounded.
2. Source studies differ in formatting, populations, and symptom-score extraction characteristics.
3. The public repository excludes the private extraction workflow and the derived patient-level dataset, so the notebook is not executable out of the box without local data preparation.
4. Current evaluation emphasizes Harrell's C-index; trial-level success prediction outputs are still under development.

---

## Data Source

Roche Tamiflu (oseltamivir) Clinical Study Reports, obtained via the EMA
clinical data transparency initiative.

Trials included:

- WV15670
- WV15671
- M76001
- WV15812
- WV15819
- WV15876
- WV15978
- WV16277

## Data Availability and Use

Data collected from published studies.
All identifiers are derived from publicly available sources.

Original source reference:

- Jefferson, Tom; Jones, Mark A.; Doshi, Peter et al. (2014). Data from: *Neuraminidase inhibitors for preventing and treating influenza in healthy adults and children* [Dataset]. Dryad. https://doi.org/10.5061/dryad.77471

Data is derived from publicly available sources for research use only.
Original ZIP bundles, private extraction notebooks, and derived patient-level
CSV files are not distributed in this public repository.

---

## License

This project is licensed under the MIT License. See `LICENSE` for details.
