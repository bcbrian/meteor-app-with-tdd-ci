#!/bin/bash
echo "###############################"
echo "# PREPARING TO RUN UNIT TESTS #"
echo "###############################"

echo "######################"
echo "# COPYING TEMP FILES #"
echo "######################"

cp .meteor/packages .meteor/packages_temp
cp .meteor/versions .meteor/versions_temp

echo "##############################"
echo "# ADDING CONSOLE TEST RUUNER #"
echo "##############################"

echo "console-test-runner" >> .meteor/packages

echo "######################"
echo "# RUNNING UNIT TESTS #"
echo "######################"

spacejam test --driver-package console-test-runner --port 3100
UNIT_TEST_RESULT=$?

echo "#######################"
echo "# UNIT TESTS FINISHED #"
echo "#######################"

echo "########################################"
echo "# ASSIGN RESULTS TO UNIT_TEST_RESULT "$UNIT_TEST_RESULT" #"
echo "########################################"

if [ "$UNIT_TEST_RESULT" == "0" ]; then
  echo "#####################"
  echo "# UNIT TESTS PASSED #"
  echo "#####################"
else
  echo "#####################"
  echo "# UNIT TESTS FAILED #"
  echo "#####################"
fi

echo "######################"
echo "# MOVING TEMP FILES #"
echo "######################"

mv .meteor/packages_temp .meteor/packages
mv .meteor/versions_temp .meteor/versions

echo "####################"
echo "# RETURNING RESULT #"
echo "####################"

exit $UNIT_TEST_RESULT
