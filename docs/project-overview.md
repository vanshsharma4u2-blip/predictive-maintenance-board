# Predictive Maintenance Alert Board

## Project Overview

Predictive Maintenance Alert Board is a front-end web application designed to provide early and explainable warnings about potential equipment problems before they develop into simulated failures.

The application simulates equipment-health readings such as vibration, temperature, and runtime hours for a set of tracked assets. These readings are processed by a transparent, rule-based risk heuristic running entirely in the browser.

Each asset receives a continuously updating risk score based on its simulated health readings. According to the calculated risk, asset cards are organized into four maintenance stages:

- Healthy
- Watch
- At-Risk
- Maintenance Due

The system provides a Kanban-style workflow where assets can move between stages automatically as their simulated readings change. Risk indicators and alerts are updated in real time so that users can understand which assets require attention.

A key objective of the project is explainability. Instead of hiding the risk calculation inside a black-box model, the application displays the factors contributing to an asset's risk level.

## Core Modules

1. Equipment Asset Management
2. Equipment Health Data Simulation
3. Risk Score Calculation
4. Kanban Maintenance Board
5. Maintenance Alert Panel
6. Risk Visualization
7. Local Data Persistence

## Technology

- HTML5
- CSS3
- JavaScript
- React.js
- Chart.js
- Browser localStorage / IndexedDB
- Git & GitHub

## Project Approach

The application is designed as a purely front-end system. Equipment profiles and simulated reading history are maintained locally in the browser, without requiring a server-side backend.

The risk assessment mechanism is a transparent rule-based heuristic. Factors such as vibration, temperature, and runtime are evaluated to determine the current risk level of each asset.

## Maintenance Workflow

Assets are organized through four stages:

Healthy → Watch → At-Risk → Maintenance Due

As simulated equipment readings worsen or improve, the risk score changes and the corresponding asset status is updated.

## Expected Outcome

The final application will provide an interactive predictive maintenance dashboard that allows users to monitor simulated equipment health, understand risk factors, receive maintenance alerts, and observe asset status changes in real time.

The project demonstrates how explainable rule-based analysis can be used to support proactive maintenance decisions without requiring a backend or opaque machine-learning model.
