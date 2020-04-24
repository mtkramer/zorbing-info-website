/*
* ROADMAP
* create git repo
* setup the project
* push new project to repo
* structure the html tags
* pick the topic of the story for the page
* format the story as is required by instructions
* finish the 'story'...
*/

/*
No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   html-me-something.code-workspace
        new file:   index.html
        new file:   scripts.js
        new file:   styles.css
        new file:   test.js


theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git commit -m "first commit"
[master (root-commit) cfb4891] first commit
 5 files changed, 27 insertions(+)
 create mode 100644 html-me-something.code-workspace
 create mode 100644 index.html
 create mode 100644 scripts.js
 create mode 100644 styles.css
 create mode 100644 test.js

theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git remote add origin https://github.com/mtkramer/html-me-something.git

theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git push origin master
To https://github.com/mtkramer/html-me-something.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'https://github.com/mtkramer/html-me-something.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git pull origin master
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (4/4), 1.24 KiB | 28.00 KiB/s, done.
From https://github.com/mtkramer/html-me-something
 * branch            master     -> FETCH_HEAD
 * [new branch]      master     -> origin/master
fatal: refusing to merge unrelated histories

theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git push origin master
To https://github.com/mtkramer/html-me-something.git
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'https://github.com/mtkramer/html-me-something.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git fetch origin master
From https://github.com/mtkramer/html-me-something
 * branch            master     -> FETCH_HEAD

theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git push origin master
To https://github.com/mtkramer/html-me-something.git
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'https://github.com/mtkramer/html-me-something.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git push --help

theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git status
On branch master
nothing to commit, working tree clean

theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git add .

theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git pull origin master
From https://github.com/mtkramer/html-me-something
 * branch            master     -> FETCH_HEAD
fatal: refusing to merge unrelated histories

theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git remote add https://github.com/mtkramer/html-me-something.git
usage: git remote add [<options>] <name> <url>

    -f, --fetch           fetch the remote branches
    --tags                import all tags and associated objects when fetching
                          or do not fetch any tag at all (--no-tags)
    -t, --track <branch>  branch(es) to track
    -m, --master <branch>
                          master branch
    --mirror[=(push|fetch)]
                          set up remote as a mirror to push to or fetch from


theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git remote add origin https://github.com/mtkramer/html-me-something.git
fatal: remote origin already exists.

theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git fetch

theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git pull
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> master


theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git pull origin https://github.com/mtkramer/html-me-something.git
fatal: invalid refspec 'https://github.com/mtkramer/html-me-something.git'

theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git pull origin master
From https://github.com/mtkramer/html-me-something
 * branch            master     -> FETCH_HEAD
fatal: refusing to merge unrelated histories

theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git pull --rebase
error: cannot pull with rebase: Your index contains uncommitted changes.
error: please commit or stash them.

theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git commit -m "setting up remote repo"
[master b94a5a7] setting up remote repo
 1 file changed, 1 insertion(+), 1 deletion(-)

theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git pull --rebase
There is no tracking information for the current branch.
Please specify which branch you want to rebase against.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> master


theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git pull --rebase origin master
From https://github.com/mtkramer/html-me-something
 * branch            master     -> FETCH_HEAD
Successfully rebased and updated refs/heads/master.

theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git push origin master
Enumerating objects: 10, done.
Counting objects: 100% (10/10), done.
Delta compression using up to 4 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (9/9), 979 bytes | 979.00 KiB/s, done.
Total 9 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), done.
To https://github.com/mtkramer/html-me-something.git
   1699722..5fc6985  master -> master

theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git pull --rebase --help
usage: git pull [<options>] [<repository> [<refspec>...]]

    -v, --verbose         be more verbose
    -q, --quiet           be more quiet
    --progress            force progress reporting
    --recurse-submodules[=<on-demand>]
                          control for recursive fetching of submodules

Options related to merging
    -r, --rebase[=(false|true|merges|preserve|interactive)]
                          incorporate changes by rebasing rather than merging
    -n                    do not show a diffstat at the end of the merge
    --stat                show a diffstat at the end of the merge
    --log[=<n>]           add (at most <n>) entries from shortlog to merge commit message
    --signoff[=...]       add Signed-off-by:
    --squash              create a single commit instead of doing a merge
    --commit              perform a commit if the merge succeeds (default)
    --edit                edit message before committing
    --cleanup <mode>      how to strip spaces and #comments from message
    --ff                  allow fast-forward
    --ff-only             abort if fast-forward is not possible
    --verify-signatures   verify that the named commit has a valid GPG signature
    --autostash           automatically stash/stash pop before and after rebase
    -s, --strategy <strategy>
                          merge strategy to use
    -X, --strategy-option <option=value>
                          option for selected merge strategy
    -S, --gpg-sign[=<key-id>]
                          GPG sign commit
    --allow-unrelated-histories
                          allow merging unrelated histories

Options related to fetching
    --all                 fetch from all remotes
    -a, --append          append to .git/FETCH_HEAD instead of overwriting
    --upload-pack <path>  path to upload pack on remote end
    -f, --force           force overwrite of local branch
    -t, --tags            fetch all tags and associated objects
    -p, --prune           prune remote-tracking branches no longer on remote
    -j, --jobs[=<n>]      number of submodules pulled in parallel
    --dry-run             dry run
    -k, --keep            keep downloaded pack
    --depth <depth>       deepen history of shallow clone
    --unshallow           convert to a complete repository
    --update-shallow      accept refs that update .git/shallow
    --refmap <refmap>     specify fetch refmap
    -4, --ipv4            use IPv4 addresses only
    -6, --ipv6            use IPv6 addresses only
    --show-forced-updates
                          check for forced-updates on all updated branches
    --set-upstream        set upstream for git pull/fetch


theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git push --help

theos@T-1000 MINGW64 ~/OneDrive/Desktop/LaunchCode/html-me-something (master)
$ git status
On branch master
nothing to commit, working tree clean
*/
