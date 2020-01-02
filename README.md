# Learning Git

1. Initialize empty git repo : git init
2. Add file : git add filename.txt
3. Commit : git commit -m "Some commit message"
4. Check Status : git status
5. List of tracked files : git ls-files
6. Unstage : git reset HEAD filename.txt
7. Revert to last commit : git checkout -- filename.txt
8. Rename file using git : git mv filename.txt newfilename.txt
9. Unstage a rename : git mn newfilename.txt filename.txt
10. Delete a tracked file : git rm filename.txt
11. Check commit history : git log
12. Commit history in oneline and decorated with branching graph : git log --oneline --graph --decorated
13. Commit history in a range : git log commit_hash_1...commit_hash_2
14. Commit history some time ago : git log --since="1 hours ago" or git log --since="3 days ago"
15. Commit history of a specific file : git log -- filename.txt
16. Create alias : git config --global alias.alias_name "command after git goes here"
17. Compare staged and unstaged changes : git diff
18. Compare unstaged change with last commit : git diff HEAD
19. Compare staged change with last commit : git diff --staged HEAD
20. Limit diff to a specific file : git diff -- filename
21. Compare between two commits : git diff commit_id_1 commit_id_2
22. List all branches : git branch -a
23. Create a new Branch : git branch my_new_branch_name
24. Change branch : git checkout branch_name
25. Change branch name : git branch -m oldName newName
26. Delete Branch : git branch -d branchName
27. Create and Change branch simultaneouly : git checkout -b branchName