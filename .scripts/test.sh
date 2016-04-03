#!/bin/bash
./.scripts/unit-test.sh

if [ $? -eq 0 ]; then
  ./.scripts/e2e-test.sh
  if [ $? -eq 0 ]; then
    ./.scripts/deploy.sh
    exit $?
  else
    exit 1
  fi
else
  echo "Failed unit tests"
  exit 1
fi
