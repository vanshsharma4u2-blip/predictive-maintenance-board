# Testing Documentation

## Testing Objective

The objective of testing is to verify that the Predictive Maintenance Alert Board correctly displays equipment information, maintenance states, risk indicators, and Kanban workflow.

## Functional Test Cases

| Test ID | Test Case | Expected Result |
|---|---|---|
| TC-01 | Open application | Dashboard loads correctly |
| TC-02 | Display equipment assets | Asset cards are displayed |
| TC-03 | Display temperature | Temperature value is shown correctly |
| TC-04 | Display vibration | Vibration value is shown correctly |
| TC-05 | Display runtime | Runtime value is shown correctly |
| TC-06 | Display Healthy assets | Assets appear in Healthy column |
| TC-07 | Display Watch assets | Assets appear in Watch column |
| TC-08 | Display At-Risk assets | Assets appear in At-Risk column |
| TC-09 | Display Maintenance Due assets | Assets appear in Maintenance Due column |
| TC-10 | Display risk badges | Correct risk status is displayed |
| TC-11 | Navigate between sections | Navigation works correctly |
| TC-12 | Refresh application | Application remains functional |

## UI Testing

The following interface elements are checked:

- Dashboard
- Navigation bar
- Summary cards
- Kanban columns
- Asset cards
- Risk indicators
- Equipment readings
- Maintenance messages
- Responsive layout

## Risk-State Testing

The four maintenance states are tested individually:

- Healthy
- Watch
- At-Risk
- Maintenance Due

Each state should display the asset in the correct Kanban column with the appropriate visual indicator.

## Integration Testing

The main project workflow is tested as:


Sensor Data
    ↓
Risk Evaluation
    ↓
Maintenance Status
    ↓
Kanban Board
    ↓
Maintenance Alert
