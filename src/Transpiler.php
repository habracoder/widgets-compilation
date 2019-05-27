<?php

namespace App;

class Transpiler {
    /**
     * @var \V8Js
     */
    public static $v8;

    /**
     * @var string
     */
    public static $babel;

    /**
     * Transform the source code
     * @param  string $sourceCode Source code to transform
     * @param array $options Associative array of options that will be passed to Babel
     * @param array $variables Variables
     * @return string             Transformed source code
     */
    public static function transform($sourceCode, $variables = [], $options = []) {
        $options = array_merge($options, [ 'ast' => false ]);

        // The compiled bundle will use this attributes as
        // `PHP.sourceCode` and `PHP.babelOptions`.
        // Check `src/executor.js`.
        self::$v8->sourceCode = $sourceCode;
        self::$v8->babelOptions = $options;
        self::$v8->variables = self::prepareVariables($variables);

        try {
            ob_start();
            self::$v8->executeString(self::$babel);
            $response = ob_get_contents();
            ob_end_clean();
            return $response;
        }
        catch(\V8JsException $e) {
            ob_end_clean();
            echo $e->getMessage();
            return '';
        }
    }

    /**
     * @param array $variables
     * @return array
     * @throws \Exception
     */
    private static function prepareVariables(array $variables): array
    {
        foreach ($variables as $key => &$variable) {

            if (!preg_match('/^\_\_[^\_]+\_\_$/', $key)) {
                throw new \Exception("Wrong key name, name: `$key` must have name like __VAR___");
            }


            if (is_bool($variable)) {
                continue;
            }

            if (is_int($variable) || is_numeric($variable)) {
                $variable = strval($variable);
                continue;
            }

            if (is_string($variable)) {
                continue;
            }

            throw new \Exception("Wrong type, variable: $key must be bool, int or string");
        }

        return $variables;
    }

    /**
     * Transform the content of a file
     * @param  string $filePath Absolute path of the file
     * @param array $variables Variables
     * @param array $options Associative array of options that will be passed to Babel
     * @return string           Transformed content of the file
     */
    public static function transformFile($filePath, $variables = [], $options = []) {
        try {
            $fileContent = file_get_contents($filePath);
        }
        catch(\Exception $e) {
            echo $e->getMessage();
            return '';
        }

        return self::transform($fileContent, $variables, $options);
    }
}

Transpiler::$v8 = new \V8Js();
Transpiler::$babel = file_get_contents(realpath(dirname(__FILE__) . '/../assets/executor.bundle.js'));
