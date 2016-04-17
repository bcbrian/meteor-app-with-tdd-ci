#!/bin/bash
./.scripts/unit-test.sh

if [ $? -eq 0 ]; then
  ./.scripts/deploy.sh
  exit $?
else
  echo "#####################"
  echo "# Failed unit tests #"
  echo "#####################"
  exit 1
fi
