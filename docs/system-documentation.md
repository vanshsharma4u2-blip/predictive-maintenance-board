# System Documentation

## Project Overview

Predictive Maintenance Alert Board is a React-based front-end application that monitors simulated equipment health and highlights assets that may require maintenance.

The system uses simulated values such as temperature, vibration, and runtime hours to evaluate the current condition of equipment.

## System Workflow

The application follows this basic workflow:

Equipment Data
→ Risk Evaluation
→ Maintenance Status
→ Kanban Board
→ Maintenance Alert

## Equipment Monitoring

Each asset contains information such as:
- Asset ID
- Equipment name
- Equipment type
- Temperature
- Vibration
- Runtime hours
- Current risk status

## Risk Classification

The application classifies equipment into four maintenance states:
- Healthy
- Watch
- At-Risk
- Maintenance Due
The classification is based on predefined rules applied to simulated equipment readings.

## Kanban Board

Assets are displayed according to their current maintenance state:
Healthy → Watch → At-Risk → Maintenance Due

This allows users to quickly identify equipment requiring monitoring or maintenance.
Alerts
When an asset reaches an elevated risk state, the interface displays information about the condition of the equipment and the readings contributing to the increased risk.
Front-End Structure
The application is developed using React.

Major components include:
- Main application interface
- Kanban board
- Kanban columns
- Equipment asset cards
- Risk evaluation module
- Sensor simulation module
- Alert interface

## Data Storage

The application operates on the client side. Equipment data and simulated readings can be maintained using browser storage without requiring a separate backend server.

## Project Limitation

The equipment readings are simulated rather than collected from physical industrial sensors.

Therefore, the project demonstrates the concept and workflow of predictive maintenance rather than functioning as a production industrial monitoring system.
