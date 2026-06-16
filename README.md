[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/MIT)

# IBM BOB Custom Mode

An example custom mode for IBM BOB AI Software Development Lifecycle (SDLC) partner

## Overview

IBM BOB interacts with multiple foundation models to provide software development lifecycle enablement and perform code assistance. A custom mode is one means to direct IBM BOB to provide opinionated coding and advice. This is a simple custom mode example based around enterprise standards for software product user experience design.

This example includes:

1. An example IBM BOB custom mode, IBM Branded User Experience
2. An example website and the prompts used to create it

## Features

- Definition of a custom mode for IBM BOB which can be used in any customer IBM BOB installation
- Prompt to be used to create a website that is driven by the custom mode

## Installation
1. Install and configure IBM BOB
2. Shut down IBM BOB
3. Make a back-up of your existing custom mode definitions file
4. Copy the custom mode definitions file to your IBM BOB configurations folder

### Prerequisites

- [Install IBM BOB](https://bob.ibm.com/docs/ide/getting-started/install)

### Setup

1. Start IBM BOB
2. Login to IBM BOB

### Troubleshoot

1. All whitespace in YAML file, custom_modes.yaml must be spaces, not tabs
2. All YAML in custom_modes.yaml must be well-formed
2a. If experiencing hard-to-understand errors, consult the [YAML language specification](https://yaml.org/spec/1.2.2/#331-well-formed-streams-and-identified-aliases) or use a [YAML checker](https://yamlchecker.com/)l

## Usage

### Running the Custom Mode

1. enter instruction to IBM BOB: switch-mode ux-company-branded-dev
2. ensure response from IBM BOB is Task Completed (otherwise troubleshoot)
3. enter instruction to IBM BOB: create a mock-up of a product documentation web page

### Available Tools

#### 1. IBM Branded User Experience

Provides expert-level code copilot assistance for user experience work driven by IBM Design Language, Carbon Design System, and IBM Experience Standards

## Project Structure

```
ibm-bob-custom-mode/
├── .bob/         # standard IBM BOB configuration directory, directly under IBM BOB home directory
├── docs-mockup/  # output of IBM BOB request to create documentation site mock-up
└── README.md     # this file
```

## Examples
```Create a mock-up of a product documentation web page.```

## Contributing

Outside contributions are welcomed. Please attribute generated code to IBM BOB.

## Support

For issues or questions, please refer to the [IBM BOB documentation](https://bob.ibm.com/docs/ide)