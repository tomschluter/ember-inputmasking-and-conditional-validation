
# Ember form with inputmasking, validations and conditional validations</h2>
  
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Introduction
This is a small proof of concept that utilizes different add-ons to create a form with input masking, validations and conditional validations, of which I couldn't find any examples or documentation. So to help out anyone looking to achieve the same, I'll share my solution.

## Prerequisites

The project uses the following add-ons to make a form with input masking, validations and conditional validations possible.

```
ember install ember-inputmask
ember install ember-validated-form (which uses ember-changeset and ember-changeset-validations)
ember install ember-changeset-conditional-validations
```

All credits go to the authors of the add-ons. All I did was create a form using the add-ons together.

## Todo

* create a tutorial explaining how to put the add-ons together.
