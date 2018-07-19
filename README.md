## What is "JsonSwiftConverter"?

JsonSwiftConverter is a command line tool and developer framework for generating swift codable struct file
with received json response

## Command line usage

### Install

**Installing the CLI**

To run the `converter` JsonSwiftConverter from the command line, you'll need to install [JsonSwiftConverter](https://github.com/maybeiamme/JsonSwiftConverter) globally first. You can do that now with the following command:

```sh
$ npm install --global jsonswiftconverter
```

This adds the `converter` command to your system path, allowing it to be run from any directory.

### Run

You should now be able to run `jsonswiftconverter` with the following command:

```sh
$ converter -H HEADER -X GET -N ClassName -A public -P ./Generated.swift
```

**What will happen?**

For `$ converter`, you can use same options as curl to send a request to your desired api.
Then jsonswiftconverter will create structs conforming codable protocols.

### Contributing

Pull requests and stars are always welcome.

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Jin**

* [github/maybeiamme](https://github.com/maybeiamme)

### License

Copyright © 2018, [Jin](https://github.com/maybeiamme).
Released under the [MIT license](https://opensource.org/licenses/MIT).

***