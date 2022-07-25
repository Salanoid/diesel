window.SIDEBAR_ITEMS = {"macro":[["embed_migrations","This macro will read your migrations at compile time, and create a constant value containing an embedded list of all your migrations as available at compile time. This is useful if you would like to use Diesel’s migration infrastructure, but want to ship a single executable file (such as for embedded applications). It can also be used to apply migrations to an in memory database (Diesel does this for its own test suite)."]],"struct":[["EmbeddedMigrations","A migration source that embeds migrations into the final binary"],["FileBasedMigrations","A migration source based on a migration directory in the file system"],["HarnessWithOutput","A migration harness that writes messages into some output for each applied/reverted migration"]],"trait":[["MigrationHarness","A migration harness is an entity which applies migration to an existing database"]]};